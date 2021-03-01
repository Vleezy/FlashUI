import { Injectable, NgZone, OnDestroy } from '@angular/core';
import { IMessageEvent } from '../../../../client/core/communication/messages/IMessageEvent';
import { AcceptFriendResultEvent } from '../../../../client/nitro/communication/messages/incoming/friendlist/AcceptFriendResultEvent';
import { FindFriendsProcessResultEvent } from '../../../../client/nitro/communication/messages/incoming/friendlist/FindFriendsProcessResultEvent';
import { FollowFriendFailedEvent } from '../../../../client/nitro/communication/messages/incoming/friendlist/FollowFriendFailedEvent';
import { FriendListFragmentEvent } from '../../../../client/nitro/communication/messages/incoming/friendlist/FriendListFragmentEvent';
import { FriendListUpdateEvent } from '../../../../client/nitro/communication/messages/incoming/friendlist/FriendListUpdateEvent';
import { FriendNotificationEvent } from '../../../../client/nitro/communication/messages/incoming/friendlist/FriendNotificationEvent';
import { FriendParser } from '../../../../client/nitro/communication/messages/incoming/friendlist/FriendParser';
import { FriendRequestData } from '../../../../client/nitro/communication/messages/incoming/friendlist/FriendRequestData';
import { FriendRequestsEvent } from '../../../../client/nitro/communication/messages/incoming/friendlist/FriendRequestsEvent';
import { HabboSearchResultEvent } from '../../../../client/nitro/communication/messages/incoming/friendlist/HabboSearchResultEvent';
import { InstantMessageErrorEvent } from '../../../../client/nitro/communication/messages/incoming/friendlist/InstantMessageErrorEvent';
import { MessageErrorEvent } from '../../../../client/nitro/communication/messages/incoming/friendlist/MessageErrorEvent';
import { MessengerInitEvent } from '../../../../client/nitro/communication/messages/incoming/friendlist/MessengerInitEvent';
import { MiniMailNewMessageEvent } from '../../../../client/nitro/communication/messages/incoming/friendlist/MiniMailNewMessageEvent';
import { MiniMailUnreadCountEvent } from '../../../../client/nitro/communication/messages/incoming/friendlist/MiniMailUnreadCountEvent';
import { NewConsoleMessageEvent } from '../../../../client/nitro/communication/messages/incoming/friendlist/NewConsoleMessageEvent';
import { NewFriendRequestEvent } from '../../../../client/nitro/communication/messages/incoming/friendlist/NewFriendRequestEvent';
import { RoomInviteErrorEvent } from '../../../../client/nitro/communication/messages/incoming/friendlist/RoomInviteErrorEvent';
import { RoomInviteEvent } from '../../../../client/nitro/communication/messages/incoming/friendlist/RoomInviteEvent';
import { AcceptFriendComposer } from '../../../../client/nitro/communication/messages/outgoing/friendlist/AcceptFriendComposer';
import { DeclineFriendComposer } from '../../../../client/nitro/communication/messages/outgoing/friendlist/DeclineFriendComposer';
import { GetFriendRequestsComposer } from '../../../../client/nitro/communication/messages/outgoing/friendlist/GetFriendRequestsComposer';
import { RemoveFriendComposer } from '../../../../client/nitro/communication/messages/outgoing/friendlist/RemoveFriendComposer';
import { RequestFriendComposer } from '../../../../client/nitro/communication/messages/outgoing/friendlist/RequestFriendComposer';
import { Nitro } from '../../../../client/nitro/Nitro';
import { SoundService } from '../../../shared/services/sound.service';
import { NotificationService } from '../../notification/services/notification.service';
import { MessengerChat } from '../common/MessengerChat';
import { MessengerFriend } from '../common/MessengerFriend';
import { MessengerRequest } from '../common/MessengerRequest';
import { MessengerThread } from '../common/MessengerThread';
import { FriendListMainComponent } from '../components/main/main.component';

@Injectable()
export class FriendListService implements OnDestroy
{
    private _component: FriendListMainComponent;
    private _messages: IMessageEvent[];

    private _friends: Map<number, MessengerFriend>;
    private _requests: Map<number, MessengerRequest>;
    private _threads: Map<number, MessengerThread>;

    private _userFriendLimit: number;
    private _normalFriendLimit: number;
    private _extendedFriendLimit: number;

    private _friendListReady: boolean = false;

    constructor(
        private _notificationService: NotificationService,
        private _soundService: SoundService,
        private _ngZone: NgZone)
    {
        this._component = null;

        this._friends               = new Map();
        this._requests              = new Map();
        this._threads               = new Map();

        this._userFriendLimit       = 0;
        this._normalFriendLimit     = 0;
        this._extendedFriendLimit   = 0;

        this.registerMessages();
    }

    public ngOnDestroy(): void
    {
        this.unregisterMessages();
    }

    private registerMessages(): void
    {
        this._ngZone.runOutsideAngular(() =>
        {
            if(this._messages) this.unregisterMessages();

            this._messages = [
                new AcceptFriendResultEvent(this.onAcceptFriendResultEvent.bind(this)),
                new FindFriendsProcessResultEvent(this.onFindFriendsProcessResultEvent.bind(this)),
                new FollowFriendFailedEvent(this.onFollowFriendFailedEvent.bind(this)),
                new FriendListFragmentEvent(this.onFriendListFragmentEvent.bind(this)),
                new FriendListUpdateEvent(this.onFriendListUpdateEvent.bind(this)),
                new FriendNotificationEvent(this.onFriendNotificationEvent.bind(this)),
                new FriendRequestsEvent(this.onFriendRequestsEvent.bind(this)),
                new HabboSearchResultEvent(this.onHabboSearchResultEvent.bind(this)),
                new InstantMessageErrorEvent(this.onInstantMessageErrorEvent.bind(this)),
                new MessageErrorEvent(this.onMessageErrorEvent.bind(this)),
                new MessengerInitEvent(this.onMessengerInitEvent.bind(this)),
                new MiniMailNewMessageEvent(this.onMiniMailNewMessageEvent.bind(this)),
                new MiniMailUnreadCountEvent(this.onMiniMailUnreadCountEvent.bind(this)),
                new NewConsoleMessageEvent(this.onNewConsoleMessageEvent.bind(this)),
                new NewFriendRequestEvent(this.onNewFriendRequestEvent.bind(this)),
                new RoomInviteErrorEvent(this.onRoomInviteErrorEvent.bind(this)),
                new RoomInviteEvent(this.onRoomInviteEvent.bind(this))
            ];

            for(const message of this._messages) Nitro.instance.communication.registerMessageEvent(message);
        });
    }

    private unregisterMessages(): void
    {
        this._ngZone.runOutsideAngular(() =>
        {
            if(this._messages && this._messages.length)
            {
                for(const message of this._messages) Nitro.instance.communication.removeMessageEvent(message);
            }

            this._messages = null;
        });
    }

    private onAcceptFriendResultEvent(event: AcceptFriendResultEvent): void
    {
        if(!event) return;

        const parser = event.getParser();

        if(!parser) return;

        console.log(parser);
    }

    private onFindFriendsProcessResultEvent(event: FindFriendsProcessResultEvent): void
    {
        if(!event) return;

        const parser = event.getParser();

        if(!parser) return;

        console.log(parser);
    }

    private onFollowFriendFailedEvent(event: FollowFriendFailedEvent): void
    {
        if(!event) return;

        const parser = event.getParser();

        if(!parser) return;

        console.log(parser);
    }

    private onFriendListFragmentEvent(event: FriendListFragmentEvent): void
    {
        if(!event) return;

        const parser = event.getParser();

        if(!parser) return;

        this._ngZone.run(() =>
        {
            for(const friend of parser.fragment) this.updateFriend(friend);

            if((parser.fragmentNumber + 1) === parser.totalFragments) this._friendListReady = true;
        });
    }

    private onFriendListUpdateEvent(event: FriendListUpdateEvent): void
    {
        if(!event) return;

        const parser = event.getParser();

        if(!parser) return;

        this._ngZone.run(() =>
        {
            for(const friend of parser.addedFriends) this.updateFriend(friend);

            for(const friend of parser.updatedFriends) this.updateFriend(friend);

            for(const id of parser.removedFriendIds) this.removeFriend(id);
        });
    }

    private onFriendNotificationEvent(event: FriendNotificationEvent): void
    {
        if(!event) return;

        const parser = event.getParser();

        if(!parser) return;

        console.log(parser);
    }

    private onFriendRequestsEvent(event: FriendRequestsEvent): void
    {
        if(!event) return;

        const parser = event.getParser();

        if(!parser) return;

        this._ngZone.run(() =>
        {
            for(const request of parser.requests) this.updateFriendRequest(request);
        });
    }

    private onHabboSearchResultEvent(event: HabboSearchResultEvent): void
    {
        if(!event) return;

        const parser = event.getParser();

        if(!parser) return;

        console.log(parser);
    }

    private onInstantMessageErrorEvent(event: InstantMessageErrorEvent): void
    {
        if(!event) return;

        const parser = event.getParser();

        if(!parser) return;

        console.log(parser);
    }

    private onMessageErrorEvent(event: MessageErrorEvent): void
    {
        if(!event) return;

        const parser = event.getParser();

        if(!parser) return;

        let message = '';

        switch(parser.errorCode)
        {
            case 1:
                message = '${friendlist.error.friendlistownlimit}';
                break;
            case 2:
                message = '${friendlist.error.friendlistlimitofrequester}';
                break;
            case 3:
                message = '${friendlist.error.friend_requests_disabled}';
                break;
            case 4:
                message = '${friendlist.error.requestnotfound}';
                break;
            default:
                message = (`Received messenger error: msg: ${ parser.clientMessageId }, errorCode: ${ parser.errorCode }`);
                break;

        }

        this._ngZone.run(() => this._notificationService.alert(message, '${friendlist.alert.title}'));
    }

    private onMessengerInitEvent(event: MessengerInitEvent): void
    {
        if(!event) return;

        const parser = event.getParser();

        if(!parser) return;

        this._ngZone.run(() =>
        {
            this._userFriendLimit       = parser.userFriendLimit;
            this._normalFriendLimit     = parser.normalFriendLimit;
            this._extendedFriendLimit   = parser.extendedFriendLimit;
        });

        this.requestFriendRequests();
    }

    private onMiniMailNewMessageEvent(event: MiniMailNewMessageEvent): void
    {
        if(!event) return;

        const parser = event.getParser();

        if(!parser) return;
    }

    private onMiniMailUnreadCountEvent(event: MiniMailUnreadCountEvent): void
    {
        if(!event) return;

        const parser = event.getParser();

        if(!parser) return;
    }

    private onNewConsoleMessageEvent(event: NewConsoleMessageEvent): void
    {
        if(!event) return;

        const parser = event.getParser();

        if(!parser) return;

        const thread = this.getMessageThread(parser.senderId);

        if(!thread) return;

        this._ngZone.run(() =>
        {
            thread.insertChat(parser.senderId, parser.messageText, parser.secondsSinceSent, parser.extraData);

            if(this._component && (this._component.currentThread === thread))
            {
                thread.setRead();
            }
        });

        this._soundService.playMessengerSound();
    }

    private onNewFriendRequestEvent(event: NewFriendRequestEvent): void
    {
        if(!event) return;

        const parser = event.getParser();

        if(!parser) return;

        this._ngZone.run(() => this.updateFriendRequest(parser.request));
    }

    private onRoomInviteErrorEvent(event: RoomInviteErrorEvent): void
    {
        if(!event) return;

        const parser = event.getParser();

        if(!parser) return;

        console.log(parser);
    }

    private onRoomInviteEvent(event: RoomInviteEvent): void
    {
        if(!event) return;

        const parser = event.getParser();

        if(!parser) return;

        const thread = this.getMessageThread(parser.senderId);

        if(!thread) return;

        this._ngZone.run(() =>
        {
            thread.insertChat(parser.senderId, parser.messageText, 0, null, MessengerChat.ROOM_INVITE);

            if(this._component && (this._component.currentThread === thread))
            {
                thread.setRead();
            }
        });
    }

    public getFriend(id: number): MessengerFriend
    {
        const existing = this._friends.get(id);

        if(!existing) return null;

        return existing;
    }

    private updateFriend(data: FriendParser): void
    {
        if(!data) return;

        let existing = this._friends.get(data.id);

        if(!existing)
        {
            existing = new MessengerFriend();

            this._friends.set(data.id, existing);
        }

        existing.populate(data);
    }

    public removeFriend(id: number): void
    {
        this._friends.delete(id);

        Nitro.instance.communication.connection.send(new RemoveFriendComposer(id));
    }

    private updateFriendRequest(data: FriendRequestData): void
    {
        if(!data) return;

        let existing = this._requests.get(data.requestId);

        if(!existing)
        {
            existing = new MessengerRequest();

            this._requests.set(data.requestId, existing);
        }

        existing.populate(data);
    }

    public acceptFriendRequest(request: MessengerRequest): void
    {
        this._requests.delete(request.requestId);

        Nitro.instance.communication.connection.send(new AcceptFriendComposer(request.requestId));
    }

    public removeFriendRequest(request: MessengerRequest): void
    {
        this._requests.delete(request.requestId);

        Nitro.instance.communication.connection.send(new DeclineFriendComposer(false, request.requestId));
    }

    public removeAllFriendRequests(): void
    {
        this._requests.clear();

        Nitro.instance.communication.connection.send(new DeclineFriendComposer(true));
    }

    public getMessageThread(id: number): MessengerThread
    {
        let existing = this._threads.get(id);

        if(!existing)
        {
            const friend = this.getFriend(id);

            if(!friend) return;

            existing = new MessengerThread(friend);

            this._threads.set(id, existing);
        }

        return existing;
    }

    private requestFriendRequests(): void
    {
        Nitro.instance.communication.connection.send(new GetFriendRequestsComposer());
    }

    public canBeAskedForAFriend(id: number): boolean
    {
        const existing = this._friends.get(id);

        if(existing) return false;

        return true;
    }

    public sendFriendRequest(id: number, username: string): void
    {
        const existing = this._friends.get(id);

        if(existing) return;

        Nitro.instance.communication.connection.send(new RequestFriendComposer(username));
    }

    public get component(): FriendListMainComponent
    {
        return this._component;
    }

    public set component(component: FriendListMainComponent)
    {
        this._component = component;
    }

    public get friends(): Map<number, MessengerFriend>
    {
        return this._friends;
    }

    public get requests(): Map<number, MessengerRequest>
    {
        return this._requests;
    }

    public get threads(): Map<number, MessengerThread>
    {
        return this._threads;
    }

    public get unreadCount(): number
    {
        let count = 0;

        for(const thread of this._threads.values()) (thread && thread.unread && (count++));

        return count;
    }

    public get notificationCount(): number
    {
        return (this.requests.size + this.unreadCount);
    }
}