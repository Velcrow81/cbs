/*---------------------------------------------------------------------------------------------
 *  Copyright (c) The International Federation of Red Cross and Red Crescent Societies. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

using System;
using Dolittle.Events;

namespace Events.Users
{
    public class UserCreated : IEvent
    {
        public Guid Id { get; }
        public string FullName { get; }
        public string DisplayName { get; }
        public string Country { get; }
        public Guid NationalSocietyId { get; }

        public UserCreated(Guid id, string fullName, string displayName, string country, Guid nationalSocietyId)
        {
            Id = id;
            FullName = fullName;
            DisplayName = displayName;
            Country = country;
            NationalSocietyId = nationalSocietyId;
        }
    }
}